// ==== SIMULASI SMART CONTRACT ESCROW ====

// Penyimpanan mirip blockchain
let projects: any = {};
let nextId = 1;

export function createProject(client: string, freelancer: string, amountEth: number) {
  const id = nextId++;
  
  projects[id] = {
    id,
    client,
    freelancer,
    amountEth,
    escrowBalance: amountEth,
    clientApproved: false,
    freelancerApproved: false,
    released: false,
    status: "escrow_hold", // status awal
    createdAt: new Date(),
  };

  return projects[id];
}

export function freelancerApprove(id: number) {
  projects[id].freelancerApproved = true;
  projects[id].status = "freelancer_approved";
}

export function clientApprove(id: number) {
  projects[id].clientApproved = true;
  projects[id].status = "client_approved";
}

export function releasePayment(id: number) {
  const p = projects[id];

  if (!p.clientApproved || !p.freelancerApproved) {
    throw new Error("Belum disetujui kedua pihak.");
  }

  p.released = true;
  p.escrowBalance = 0;
  p.status = "released";
}

export function getProject(id: number) {
  return projects[id];
}
