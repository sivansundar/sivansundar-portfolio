import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Work Experience
        </h1>
        <div className="grid gap-6 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Jiva Ag</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-10">
                <div>
                  <p className="text-base text-muted-foreground mb-4">
                    Senior Android Engineer • October 2022 - March 2024
                  </p>
                  <li className="text-sm text-muted-foreground mb-4">
                    Migrating our collector and retailer app to Jetpack Compose
                  </li>
                  <li className="text-sm text-muted-foreground mb-4">
                    Built an in-house design SDK that is used by apps across
                    Jiva's ecosystem
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Headed the tech efforts on an Information Architecture
                    project which aimed to simplify the app.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Built an in-app marketing tool for our retailers where they
                    could run promos and offers on their products and share it
                    across to different apps to spread the word.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Architectured the entire approach to Jetpack Compose across
                    our suite of apps. Right from the setup, to the
                    architecture, and the design system. Also trained the entire
                    Android team and helped them adopt our architecture and be
                    proficient with it.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Developed a Design Token generator for Compose. This was a
                    unique requirement where the tool would take the exported
                    design tokens from Figma and give out Compose Theme files
                    that can be imported onto our project. Helps designers and
                    devs stay in sync.
                  </li>
                </div>

                <div>
                  <p className="text-base text-muted-foreground mb-4">
                    Android Engineer • April 2022 - March 2024
                  </p>
                  <li className="text-sm text-muted-foreground mb-4">
                    Migrated the entire codebase to Kotlin, away from Java and
                    Dagger
                  </li>
                  <li className="text-sm text-muted-foreground mb-4">
                    MC Tiering
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Improved our crash-free rates from 91% to 99.89%
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Reduced our app size from 32MB to 12MB and the app's
                    download size from 21MB to 7MB.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Built an Update Manager that would give us the control to
                    force update the our apps in specific regions. This was a
                    remote solution and did not require a separate app release.
                    Play store gives us country level control only where as with
                    the Update Manager, you could control which region gets a
                    forced update.
                  </li>
                </div>
              </div>
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
                Developed solutions in fintech and ed-tech domains. Built native
                mobile applications and worked on various ecommerce projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
