import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work Experience
          </h1>
          <Link
            href="https://www.linkedin.com/in/sivan-chakravarthy-s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default">
              <LucideLinkedin />
              LinkedIn
            </Button>
          </Link>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
            Tools & Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Android Development
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Engineering
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Jetpack Compose
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Kotlin
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Kotlin Multiplatform
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Shopify App Development
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              React.js
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Ruby on Rails
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              MySQL
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Postgres
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Node.js
            </span>
          </div>
        </div>
        
        <div className="grid gap-6 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://www.jiva.ag/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jiva Ag 🌽
                </Link>
              </CardTitle>
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
                    Led a team of 10 Android Engineers across different pods and led the initiative of migrating our suite of apps from Java to Kotlin
                    which improved our crash-free rates from 87% to 99.89%.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Led the initiative to integrate LLM-based coding assistants into mobile development workflows, enabling the Android engineering
                    team to focus on solving real problems and deliver solutions faster. This improved story point velocity across teams by 60%.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Doubled our daily app usage and transactions metrics by leading the migration of our applications to Jetpack Compose, supported
                    by a company-wide playbook that enhanced mobile development practices that included architectural guidelines, design system
                    utilities and testing principles.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Enhanced app deployment control and user experience by developing an Update Manager in Kotlin for targeted regional updates,
                    ensuring robust mobile development standards through attention to detail. This increased our update adoption rate by 70%.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Achieved 99.9% crash-free user sessions by actively monitoring Sentry, deploying best practices and encouraging ownership
                    amongst the team.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Conducted field research in collaboration with the design research teams to understand the ground reality of our users and how
                    effectively we can iterate on our solutions.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Fostered collaboration among Android engineers by conducting weekly guild meetings and driving critical technology decisions,
                    addressing cross-functional challenges that led to improved project outcomes.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Improved the existing agricultural sales processes for users by developing a WhatsApp service on Rails that integrated backend
                    technologies with Meta's WhatsApp Business APIs, significantly enhancing user engagement.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Improved communication and professional growth among engineers by leading cross functional guild sessions and providing
                    actionable feedback, strengthening communication skills and fostering collaboration across mobile and backend teams.
                  </li>

                  <li className="text-sm text-muted-foreground mb-4">
                    Streamlined integration of design changes into mobile projects by developing a Design Token generator for Compose, improving
                    collaboration between designers and mobile engineers, enabling seamless updates to project themes from Figma changes.
                  </li>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://colearn.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoLearn 👨‍🎓
                </Link>
              </CardTitle>
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
              <CardTitle>
                <Link
                  href="https://www.getwizr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wizr 💰
                </Link>
              </CardTitle>
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
              <CardTitle>
                <Link
                  href="https://www.triveous.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Triveous Technologies 💻
                </Link>
              </CardTitle>
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
