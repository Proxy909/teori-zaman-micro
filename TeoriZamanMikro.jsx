
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TeoriZamanMikro() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Zaman Tak Terlihat</h1>
      <p className="text-center text-lg text-gray-600">
        Ketika Mikroorganisme Menggerakkan Evolusi Dunia
      </p>
      <Separator />
      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold">Pendahuluan</h2>
          <p>
            Sepanjang sejarah, narasi populer tentang perubahan zaman di Bumi
            hampir selalu dikaitkan dengan kehancuran besar: tumbukan asteroid,
            letusan supervulkanik, atau zaman es. Namun, narasi ini menyisakan
            pertanyaan mendasar: jika perubahan zaman hanya disebabkan oleh
            kehancuran, mengapa evolusi terjadi secara sistematis dan selektif?
            Dokumen ini menyusun sebuah hipotesis alternatif: bahwa perubahan
            zaman biologis di Bumi lebih kuat dipengaruhi oleh mikroorganisme.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
