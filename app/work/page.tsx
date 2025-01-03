import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function WorkPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Work Experience</h1>
        <div className="grid gap-6 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>JivaAg</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Developer • 2022 - Present
              </p>
              <p>
                Working on improving the lives of smallhold farmers through technology.
                Building native mobile applications and solutions in the agritech space.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Previous Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Various Roles • 2018 - 2022
              </p>
              <p>
                Developed solutions in fintech and ed-tech domains. Built native mobile
                applications and worked on various ecommerce projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

