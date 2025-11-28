'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

interface FileUploadProps {
  label: string;
  existingUrl?: string;
  onFileChange: (file: File) => void;
}

const FileUpload = ({ label, existingUrl, onFileChange }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Input type="file" onChange={handleChange} />
      {/* Preview nama file baru */}
      {file && <p className="text-sm text-gray-500">{file.name}</p>}
      {/* Preview file dari biodata */}
      {!file && existingUrl && (
        <a
          href={existingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline"
        >
          {existingUrl.split("/").pop()}
        </a>
      )}
    </div>
  );
};
