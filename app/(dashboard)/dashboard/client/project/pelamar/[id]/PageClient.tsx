"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  createProject,
  freelancerApprove,
  clientApprove,
  releasePayment,
  getProject,
} from "@/lib/escrowMock";

export default function PageClient({ id }: { id: string }) {
  const [amountETH, setAmountETH] = useState("");
  const [project, setProject] = useState<any>(null);

  // Handle pembayaran pertama kali
  const handlePay = () => {
    if (!amountETH) return alert("Masukkan ETH!");

    const newProject = createProject("client123", id, Number(amountETH));
    setProject(newProject);
  };

  const updateProject = () => {
    if (!project) return;
    setProject({ ...getProject(project.id) });
  };

  const handleFreelancerApprove = () => {
    freelancerApprove(project.id);
    updateProject();
  };

  const handleClientApprove = () => {
    clientApprove(project.id);
    updateProject();
  };

  const handleRelease = () => {
    try {
      releasePayment(project.id);
      updateProject();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const statusColor: Record<string, string> = {
    escrow_hold: "text-orange-500",
    freelancer_approved: "text-blue-500",
    client_approved: "text-purple-500",
    released: "text-green-600 font-bold",
  };

  const statusText: Record<string, string> = {
    escrow_hold: "Dana Ditahan (Escrow)",
    freelancer_approved: "Freelancer Setuju",
    client_approved: "Client Setuju",
    released: "Pembayaran Dilepas",
  };

  return (
    <div className="min-h-screen pt-[10vh] px-6">
      <h1 className="text-2xl font-bold mb-4">Simulasi Escrow (MVP)</h1>

      {/* FORM PEMBAYARAN */}
      {!project && (
        <div className="border p-4 rounded-lg flex flex-col gap-4">
          <h2 className="font-semibold text-lg">1. Transfer ke Escrow</h2>

          <input
            type="number"
            placeholder="0.5"
            value={amountETH}
            onChange={(e) => setAmountETH(e.target.value)}
            className="border p-2 rounded text-black"
          />

          <Button onClick={handlePay}>Bayar & Tahan Dana</Button>
        </div>
      )}

      {/* STATUS PROJECT */}
      {project && (
        <div className="mt-6 border p-4 rounded-lg space-y-4">

          <h2 className="text-xl font-semibold">Status Project #{project.id}</h2>

          <p className={`text-lg ${statusColor[project.status]}`}>
            ● {statusText[project.status]}
          </p>

          <p>Total: {project.amountEth} ETH</p>
          <p>Escrow Balance: {project.escrowBalance} ETH</p>

          {/* PROGRESS BAR */}
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div
              className={`h-3 rounded-full transition-all ${
                project.status === "escrow_hold" ? "w-1/4 bg-orange-500" :
                project.status === "freelancer_approved" ? "w-2/4 bg-blue-500" :
                project.status === "client_approved" ? "w-3/4 bg-purple-500" :
                "w-full bg-green-600"
              }`}
            ></div>
          </div>

          {/* BUTTON ACTIONS */}
          <div className="flex flex-col gap-3 mt-4">
            <Button
              onClick={handleFreelancerApprove}
              disabled={project.status !== "escrow_hold"}
            >
              Freelancer Approve
            </Button>

            <Button
              onClick={handleClientApprove}
              disabled={project.status !== "freelancer_approved"}
            >
              Client Approve
            </Button>

            <Button
              onClick={handleRelease}
              disabled={project.status !== "client_approved"}
            >
              Release Pembayaran
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
