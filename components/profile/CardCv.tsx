import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface BioSidebarProps {
   bio: {
     fullName: string;
    phone: string;
    isActive: boolean;
    userId: string;
    photoProfile: string;
    address:string;
    portfolio:string;
    documentUrl:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bidang: any;
    skills: []
   }
}


const CardCv = ({ bio }: BioSidebarProps) => {
  return (
    <div>
      <Card className="rounded-xl shadow-md bg-white text-primary">
          <CardHeader>
            <CardTitle className="text-primary">Data Pribadi</CardTitle>
            <CardDescription className="text-primary">
              Pastikan data pribadi anda benar untuk mempermudah proses pendaftaran
            </CardDescription>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-primary mb-1">Full Name</h3>
              <p className="text-gray-600">{bio.fullName}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary mb-1">Phone</h3>
              <p className="text-gray-600">{bio.phone}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary mb-1">Address</h3>
              <p className="text-gray-600">{bio.address}</p>
            </div>

            {bio.portfolio?.[0] && (
              <div>
                <h3 className="text-sm font-semibold text-primary mb-1">Portfolio</h3>
                <a
                  href={bio.portfolio[0]}
                  target="_blank"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Open Portfolio
                </a>
              </div>
            )}

            {bio.documentUrl && (
              <div>
                <h3 className="text-sm font-semibold text-primary mb-1">Document</h3>
                <a
                  href={bio.documentUrl}
                  target="_blank"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Download Document
                </a>
              </div>
            )}

            <div className="col-span-1">
               <h3 className="text-sm font-semibold text-primary mb-2">Bidang</h3>
                <span
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {bio.bidang.nama}
                    </span>
            </div>

            {/* Section baru untuk skills */}
            {bio.skills?.length > 0 && (
              <div className="col-span-1 sm:col-span-2">
                <h3 className="text-sm font-semibold text-primary mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                {bio.skills.map((skill: { id: string; name: string }) => (
                    <span
                      key={skill.id}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
    </div>
  )
}

export default CardCv