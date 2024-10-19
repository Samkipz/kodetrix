import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function IndustriesAndServices() {
  return (
    <section id="industries-services" className="py-12 px-4 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Industries and Services</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Learn about the industries we serve and the services we offer.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Comprehensive IT Solutions</CardTitle>
            <CardDescription>
              Delivering solutions tailored to your industry.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We provide IT solutions that address current market challenges in Finance, Agriculture, Health, and more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Strategic Industry Focus</CardTitle>
            <CardDescription>
              Expertise in key industry verticals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our expertise spans various industries such as Finance, Agriculture, Health, and others, ensuring solutions fit their unique needs.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Separator */}
      <Separator className="my-12" />

      {/* Industries Section */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Finance */}
        <Card>
          <CardHeader>
            <CardTitle>Finance</CardTitle>
            <CardDescription>Innovative IT solutions for the financial industry.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We streamline financial operations with advanced technology, enabling growth and sustainability.
            </p>
          </CardContent>
        </Card>

        {/* Agriculture */}
        <Card>
          <CardHeader>
            <CardTitle>Agriculture</CardTitle>
            <CardDescription>Technology solutions for modern agriculture.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We help optimize agricultural processes, increasing efficiency and reducing costs.
            </p>
          </CardContent>
        </Card>

        {/* Health */}
        <Card>
          <CardHeader>
            <CardTitle>Health</CardTitle>
            <CardDescription>Improving healthcare systems with technology.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our healthcare solutions enhance patient care, data management, and operational efficiency.
            </p>
          </CardContent>
        </Card>

        {/* Custom Industry */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Solutions</CardTitle>
            <CardDescription>Tailored IT solutions for emerging industries.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We also offer custom IT solutions for industries that need personalized technology support.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}