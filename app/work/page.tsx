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
              <CardTitle>Jiva Ag 🌽</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-10">
                <div>
                  <p className="mb-8 text-sm italic text-muted-foreground">
                    Jiva is a holistic agritech startrup that aims to improve
                    the livelihood of small hold farmers across Indonesia at
                    scale.
                  </p>

                  <p className="text-base text-muted-foreground mb-4 font-bold">
                    Senior Engineer • September 2023 - Current
                  </p>
                  <li className="text-sm text-muted-foreground mb-4">
                    Drove critical technology decisions to optimize delivery
                    timelines, enabling rapid feedback loops and iterative
                    improvements across projects.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Partnered with technical leads and leadership teams to
                    streamline workflows, resulting in enhanced team
                    productivity and throughput.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Engaged with customer experience (CX) teams and design
                    researchers to analyze user behavior, translating insights
                    into high-impact product solutions. Interviewed retailers at
                    remote parts of Indonesia to understand how their commerce
                    funnels operates and how we can drive more value for them.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Developed a WhatsApp service on Rails that empowered users
                    to sell crops, access feedmill pricing, and manage payments.
                    This integration with Meta's WhatsApp Business Service and
                    Landbot significantly improved the agricultural sales
                    process for Jiva.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Established a comprehensive playbook for migrating
                    applications to Jetpack Compose, including architectural
                    guidelines and design system utilities. Trained the mobile
                    development team, enhancing their proficiency in the new
                    architecture.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Built an in-house design system that is used by apps across
                    Jiva's ecosystem, maintaining visual consistency and
                    elevating user experience.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Led the migration of collector and retailer apps to Jetpack
                    Compose, resulting in a remarkable 70% increase in daily app
                    usage and transaction volumes.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Collaborated with the design team on a complete rewrite of
                    the app's information architecture, simplifying navigation
                    and improving user comprehension.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Spearheaded the Android team, overseeing cross-functional
                    challenges that had massive business impact. Conducted
                    weekly guild meetings to create a brainstorming environment
                    amongst Android engineers across pods which promoted
                    collaboration and knowledge sharing.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Created an in-app marketing tool that enabled retailers to
                    launch promotional campaigns across various platforms,
                    driving sales significantly during H1 2024.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Setup design component guidelines and preview modes within
                    the app using Showkase. This allowed QAs and PMs to have a
                    closer understanding of how design components functioned
                    across various devices.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Developed a unique Design Token generator for Compose that
                    streamlined the integration of Figma design tokens into
                    project themes, improving collaboration between design and
                    development teams amidst design changes.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Actively mentored engineers by providing actionable feedback
                    and insights, fostering their professional growth within the
                    organization.
                  </li>
                </div>

                <div>
                  <p className="text-base text-muted-foreground mb-4 font-bold">
                    Android Engineer • Apr 2022 - Aug 2023
                  </p>
                  <li className="text-sm text-muted-foreground mb-4">
                    Successfully migrated the entire codebase from Java to
                    Kotlin, incorporating Coroutines for enhanced performance
                    and scalability.
                  </li>
                  <li className="text-sm text-muted-foreground mb-4">
                    Designed and implemented a point-based reward system for
                    collectors across three regions in Indonesia, driving
                    engagement and retention.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Achieved a significant reduction in app size from 29.9 MB to
                    12.3 MB (58.8%) through code obfuscation, resource
                    shrinking, and optimization techniques. Reduced update sizes
                    from 25 MB to 7.8 MB (68.8%).
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Developed an Update Manager that enabled targeted forced
                    updates in specific regions without requiring separate app
                    releases, enhancing control over app deployment.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Proficient with production support when called upon. Led a
                    response team during critical production outages which was
                    responsible for building an alternative login system that
                    would unblock users from authenticating with our products.
                    As a result, this improved authentication error rates and
                    aided cost cutting by a huge margin.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Elevated app crash-free rates from 91% to an impressive
                    99.89%, significantly enhancing user experience and
                    reliability.
                  </li>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>CoLearn 👨‍🎓</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-8 text-sm italic text-muted-foreground">
                CoLearn is an Ed-Tech startup based out of Indonesia that’s on a
                mission to bring cohort-based high-quality online live classes
                that are affordable to all Indonesian students in Grades 4-12.
                As a member of their Android Engineering team, I was responsible
                for productizing new features right from the design pipeline to
                the end engineering goal and maintaining the app.
              </p>
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
              <CardTitle>Wizr 💰</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-8 text-sm italic text-muted-foreground">
                Wizr Wealth is a financial services company that helps you
                manage your personal finance. Wizr helps you find experts who
                can help you invest and grow your money. As the only member of
                their engineering team, I took charge of building two native
                android applications from scratch and building a fully secure
                and functional REST API.
              </p>

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
              <p className="mb-8 text-sm italic text-muted-foreground">
                Triveous Technologies is a PaaS startup that deals with multiple
                products and services. As a part of their team, my primary focus
                was to improve and maintain their performance monitoring SDK for
                Android.
              </p>

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
