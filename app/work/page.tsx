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
                  <p className="text-base text-muted-foreground mb-4 font-bold">
                    Senior Engineer • October 2022 - Current
                  </p>
                  <li className="text-sm text-muted-foreground mb-4">
                    Contributed to tech decisions across the board optimizing
                    for shortest deliverable and quick feedback to iterate.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Working closely with tech leads and the leadership teams to
                    run effective streams of work and maintain high team
                    throughputs.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Built a Whatsapp bot on Rails which would allow users to
                    sell crops, view prices of a particular feedmill and receive
                    payments.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Setup a playbook and framework to migrate our suite of apps
                    to Jetpack Compose. This included spikes, architecture
                    decisions, design system utilities and regular iterations.
                    Also trained the entire mobile development team and helped
                    them adopt our architecture and be proficient with it.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Built an in-house design system that is used by apps across
                    Jiva's ecosystem.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Migrating our collector and retailer apps to Jetpack
                    Compose.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Headed the tech efforts on an Information Architecture
                    re-write on the client side which aimed to simplify the app.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Built an in-app marketing tool for our retailers where they
                    could run promos and offers on their products and share it
                    across to different apps to spread the word.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Developed a Design Token generator for Compose. This was a
                    unique requirement where the tool would take the exported
                    design tokens from Figma and generate Compose Theme files
                    that can be imported into your project. Helps designers and
                    devs stay in sync.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Actively mentored engineers across the board and giving them
                    actionable insights and feedback to progress in their
                    career.
                  </li>
                </div>

                <div>
                  <p className="text-base text-muted-foreground mb-4 font-bold">
                    Android Engineer • April 2022 - March 2024
                  </p>
                  <li className="text-sm text-muted-foreground mb-4">
                    Migrated the entire codebase to Kotlin, away from Java and
                    Dagger.
                  </li>
                  <li className="text-sm text-muted-foreground mb-4">
                    Implemented a point based reward systems for collectors
                    using our app. This was scaled in three different regions
                    across Indonesia.
                  </li>
                  <li className="text-sm text-muted-foreground mb-4">
                    Built an Update Manager that would give us the control to
                    force update apps in specific regions. This was a remote
                    solution and did not require a separate app release. Play
                    store gives us country level control only where as with the
                    Update Manager, you could control which region gets a forced
                    update.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Proficient with production support when called upon.
                    Building out alternative login systems that had a higher
                    deliverablity rate.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Improved our crash-free rates from{" "}
                    <strong>91% to 99.89%</strong>
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Built and shipped features on high priority that would
                    resolve production issues
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Reduced our app size from{" "}
                    <strong>29.9 MB to 12.3 MB</strong> and the app's download
                    size on new updates from <strong>25 MB to 7.8 MB</strong> by
                    implementing code obfuscation, resource shrinking and code
                    optimizations. This led to a <strong>58.8%</strong> in app
                    size reduction and <strong>68.8%</strong> reduction in the
                    update size.
                  </li>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>CoLearn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground mb-4 font-bold">
                Senior Software Engineer • August 2021 - December 2021
              </p>

              <li className="text-sm text-muted-foreground mb-4">
                Responsible for rebuilding our custom camera module with new
                features.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Implemented HLS caching for our solution videos that improved
                video load times by <strong>85%</strong>.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Built the sample question functionality that allows students to
                view the solutions for a sample question without having to click
                a picture.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Worked closely with the product team to ensure that we run
                feature implementations via experiments.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Monitoring bugs and crashes as a triage commander on a bi-weekly
                basis and helping the team to prioritize and fix these issues in
                a timely manner.
              </li>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Wizr</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground mb-4 font-bold">
                Software Engineer • September 2020 - August 2021
              </p>
              <li className="text-sm text-muted-foreground mb-4">
                Responsible for building two native android applications using
                Android’s Jetpack architecture. One for the investor and one for
                the financial expert.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Developed a secure REST API using Typescript and Express JS to
                transact with a Postgres database.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Working closely with designers to build pixel perfect user
                interfaces with the mockups provided via Figma.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Actively taking part in discussions with the team to understand
                the requirements and use cases and provide an effective
                solution.
              </li>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Triveous Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground mb-4 font-bold">
                Software Development Engineer Intern • Febuary 2020 - July 2020
              </p>
              <li className="text-sm text-muted-foreground mb-4">
                Responsible for maintaining the Perfachhi SDK for Android.
                Perfachhi SDK is an in-app performance monitoring tool that
                helps developers to monitor the performance parameters of their
                app.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Developed and integrated the app startup time metrics and
                battery metrics monitoring as a new feature to the SDK.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Developed a realtime SDK configurations panel that allows
                developers to trigger metrics from the product's dashboard.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Wiring the SDK metrics with our backend REST API using Node JS
                and Sequelize ORM.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Providing support to our customers who use our SDK and enhance
                their experience. Generated reports for potential customers
                based on their product integration.
              </li>
              <li className="text-sm text-muted-foreground mb-4">
                Actively maintaining the SDK to provide frequent updates and bug
                fixes
              </li>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
