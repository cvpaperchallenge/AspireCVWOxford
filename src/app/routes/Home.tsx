import { Calendar, Mail, MapPin } from "lucide-react";
import { SiSlack } from "react-icons/si";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import homeData from "../../data/home.json";
import programData from "../../data/program.json";
import contactData from "../../data/contact.json";
import type { Route } from "./+types/Home";
import { buildMeta } from "@/lib/seo";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title:
      "ASPIRE Computer Vision Workshop at Oxford VGG | Building Multimodal AI Foundation Models under Limited Resources",
    description:
      "ASPIRE Computer Vision Workshop at Oxford VGG, held at Magdalen College, University of Oxford on April 24, 2026. Invited talks and discussions on building multimodal AI foundation models under limited resources.",
    path: "/",
    keywords: [
      "LIMIT.Lab",
      "ASPIRE",
      "Computer Vision",
      "Oxford VGG",
      "multimodal AI",
      "foundation models",
      "limited resources",
    ],
  });

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);
    element?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <main className="container px-6 py-8 space-y-16 xl:w-6xl">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border px-6 py-16 text-center shadow-lg">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <img
            src="/aspire-cover.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent dark:from-primary/30" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span>supported by</span>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-full border bg-background/90 px-6 py-3 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <img
                  src="/aspire-logo-black.png"
                  alt="ASPIRE logo"
                  className="h-10 dark:hidden"
                />
                <img
                  src="/aspire-logo-white.png"
                  alt="ASPIRE logo"
                  className="hidden h-10 dark:block"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl xl:whitespace-nowrap">
              {homeData.title}
            </h1>
            <p className="text-2xl tracking-tight sm:text-3xl md:text-4xl">
              {homeData.tagline}
            </p>
            {/* <p className="text-lg text-muted-foreground">{homeData.subtitle}</p> */}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{homeData.eventInfo.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{homeData.eventInfo.location}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="outline" size="lg" asChild>
              <Link to="/#program">View Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="about" className="space-y-6 -mt-8">
        <div className="space-y-2">
          <h2 className="text-3xl tracking-tighter">
            About ASPIRE Computer Vision Workshop at Oxford VGG
          </h2>
          <p>
            We are excited to announce the ASPIRE Computer Vision Workshop at
            Oxford VGG, hosted by the Visual Geometry Group (VGG) at the
            University of Oxford and Computer Vision Research Team at AIST, with
            support from ASPIRE and LIMIT.Lab. This workshop will be held at the
            historic Magdalen College, University of Oxford.
          </p>
          <p>
            This workshop focuses on the central theme of &ldquo;Building
            Multimodal AI Foundation Models under Limited Resources,&rdquo; a
            timely and critical challenge in modern computer vision and machine
            learning research. By bringing together researchers working at the
            intersection of efficiency, scalability, and multimodal
            understanding, we aim to spark new ideas and collaborations that
            push the frontiers of the field.
          </p>
          <p>
            The program features a rich mix of invited talks, oral
            presentations, and lightning talks, designed to encourage active
            exchange among researchers, engineers, and grad students. Beyond the
            technical sessions, the workshop places special emphasis on
            fostering meaningful connections across the international research
            community, particularly between researchers from the UK, Japan, and
            many other countries. Through structured and informal networking
            opportunities, we hope to build lasting bridges that extend well
            beyond the workshop itself.
          </p>
        </div>
        {/* Broader impact */}
        {/* <div className="space-y-2">
          <h3 className="text-2xl tracking-tighter">Broader impact</h3>
          <p>
            The goal of this workshop is to explore and discuss ways of
            effectively adapting and utilizing large pretrained models in
            computer vision. The sheer parameter and training dataset sizes mean
            that these foundation models often cannot be trained from scratch by
            academia, yet they offer unprecedented opportunities for downstream
            adaptation. These developments bring both challenges and novel
            opportunities - from leveraging pretrained diffusion models for 3D
            reconstruction to incorporating vision encoders into multimodal
            systems. Rather than viewing model scale as a barrier, we focus on
            innovative usage and adaptation techniques and post-pretraining
            strategies that make these powerful models accessible and useful for
            diverse applications. In this workshop, we aim to bring together
            researchers from academia and industry to discuss how the vision
            community can best harness these pretrained foundations for
            advancing computer vision research and applications.
          </p>
        </div> */}
        {/* Topics of Interest */}
        {/* <div className="space-y-2">
          <h3 className="text-2xl tracking-tighter">Topics of Interest</h3>
          <p>The workshop focus on following topics:</p>
          <div className="space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              {callForPapersData.topics.core.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div> */}
      </section>

      {/* Program Section */}
      {/* <section id="program" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Workshop Program
          </h2>
        </div>
        <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
          <Info className="h-6 w-6 shrink-0 text-primary" />
          <p>
            The following workshop program describes the tentative schedule in
            the case that the workshop is held in the morning. Please note that
            the program may change depending on the assigned time slot. Please
            check back for updates.
          </p>
        </div>
        <ScrollArea className="w-[80dvw] md:w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Time</TableHead>
                <TableHead>Session</TableHead>
                <TableHead className="hidden md:table-cell">
                  Presenter
                </TableHead>
                <TableHead className="hidden md:table-cell w-[140px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.workshopProgram.day1.schedule.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.time}</TableCell>
                  <TableCell>{item.session}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.presenter || ""}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.slides ? (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={item.slides} target="_blank" rel="noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Slides
                        </a>
                      </Button>
                    ) : (
                      <span className="text-muted-foreground text-sm"></span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section> */}

      {/* Invited Speakers Section */}
      {/* <section id="speakers" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Invited Speakers
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programData.invitedSpeakers.map((speaker, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{speaker.name}</CardTitle>
                <CardDescription>{speaker.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={speaker.photo}
                      alt={`Photo of ${speaker.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={speaker.website} target="_blank" rel="noreferrer">
                    View Profile <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Organizers */}
      {/* <section id="organizers" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">Organizers</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {organizersData.organizers.map((chair, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{chair.name}</CardTitle>
                <CardDescription>{chair.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={chair.photo}
                      alt={`Photo of ${chair.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={chair.website} target="_blank" rel="noreferrer">
                    Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Program Section */}
      <section id="program" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl tracking-tighter">Workshop Program</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold w-[140px]">Time</th>
                <th className="text-left p-4 font-semibold">Session</th>
              </tr>
            </thead>
            <tbody>
              {programData.schedule.map((item, index) => (
                <>
                  <tr key={index} className="border-b">
                    <td className="p-4 align-top">
                      {item.timeStart} - {item.timeEnd}
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="font-semibold">{item.event}</div>
                        {item.presenter && (
                          <div className="text-sm text-muted-foreground">
                            {item.presenter}
                          </div>
                        )}
                        {item.topic && (
                          <div className="text-sm italic text-muted-foreground">
                            {item.topic}
                          </div>
                        )}
                        {item.details && item.details.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {item.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="pl-4">
                                {detail.id && (
                                  <span className="font-mono text-xs text-muted-foreground mr-2">
                                    {detail.id}.
                                  </span>
                                )}
                                {detail.presenter && (
                                  <span className="text-sm">
                                    {detail.presenter}
                                  </span>
                                )}
                                {detail.title && (
                                  <div className="text-sm text-muted-foreground mt-1">
                                    {detail.title}
                                  </div>
                                )}
                                {detail.links?.length > 0 && (
                                  <div className="flex gap-2 mt-1 flex-wrap">
                                    {detail.links?.map(
                                      (
                                        link: { label: string; url: string },
                                        linkIndex: number,
                                      ) => (
                                        <span key={linkIndex}>
                                          {link.url ? (
                                            <a
                                              href={link.url}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="text-xs text-primary hover:underline"
                                            >
                                              [{link.label}]
                                            </a>
                                          ) : (
                                            <span className="text-xs text-muted-foreground">
                                              [{link.label}]
                                            </span>
                                          )}
                                        </span>
                                      ),
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Photo Galleries Section */}
      <section id="gallery" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl tracking-tighter">Photo Galleries</h2>
          <p className="text-muted-foreground">
            A glimpse into our workshop days at Magdalen College, University of
            Oxford
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "88xe2pp-fnZsLucEc_MlTKAM2O06Xrfln06mQMXDjSU-1200--cover.jpg",
            "yJCrIrTsmA2HyVcUA_YTMkCGB04NpVGpKalu4IIe0MQ-1200--cover.jpg",
            "Y41oT8FtjM08O1BlP9xavgSxYuDYj-y3ZcAkDszQJoc-1200--cover.jpg",
            "qHu1UG6aJekLi0Lah2n8hg1ApXsB6kkqYkCTCzXOOqo-1200--cover.jpg",
            "Vfr7HmIjgzcPPFn5QIheeRk7b9Cpa7IEklj9cGle9Ao-1200--cover.jpg",
            "xvxwRXILuo4LOKetlsqk4FVS3alzFAtxCeKc6PfZ64g-1200--cover.jpg",
            "ErR9iQAhhFImXyIzV7Z-st5vJrwWDSQ0IXs1indVLEs-1200--cover.jpg",
            "px09QQvrFcdQbjEv0JHqadC1eLK6erkTkJcnclSW9ko-1200--cover.jpg",
            "TCkzfXmGYtF6B7adwv2LCIzU4LfCAiDkTr_f5YV38-A-1200--cover.jpg",
            "S-IwaqrGGMkEs0eFh9i78YqYXIPGgPLIjCf-O8QJruE-1200--cover.jpg",
            "TnN3K1pKkoVg5MYVsgZmetgLWrtCjoac8xv_HqZdFys-1200--cover.jpg",
            "wJskHv9gPnaXuSvPOHwGB60jUco0mxh01saybK86Fbk-1200--cover.jpg",
            "wSzZbxLkKSvbQA2gpzXUAaUGL3wAvhFK3oF48ab8C0Q-1200--cover.jpg",
            "yHx46puiB8yelm5kx3SYue8z0OzNMA2o8eyk9Txexdo-1200--cover.jpg",
          ].map((filename, index) => (
            <div
              key={index}
              className="group relative aspect-video overflow-hidden rounded-lg border bg-muted transition-all hover:shadow-lg"
            >
              <img
                src={`/gallery/${filename}`}
                alt={`Workshop photo ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Info + Latest News Section */}
      <div className="space-y-6">
        {/* Latest News Section */}
        <section id="news" className="space-y-6 mt-16">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter">Latest News</h2>
          </div>
          <div className="space-y-4">
            {homeData.latestNews.map((news, index) => (
              <div key={index} className="rounded-lg border bg-card p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{news.title}</h3>
                    <p className="text-sm text-muted-foreground">{news.date}</p>
                  </div>
                </div>
                <p className="mt-2">{news.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Information */}
      <section id="contact" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Contact Information
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactData.contactInfo.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {info.icon === "Mail" && <Mail className="h-5 w-5" />}
                  {info.icon === "MapPin" && <MapPin className="h-5 w-5" />}
                  {info.icon === "SiSlack" && <SiSlack className="h-5 w-5" />}
                  {info.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
                {info.value && (
                  <p className="font-medium mt-2">
                    {info.type === "Email" ? (
                      <a
                        href={`mailto:${info.value}`}
                        className="hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      info.value.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < info.value.split("\n").length - 1 && <br />}
                        </span>
                      ))
                    )}
                  </p>
                )}
                {info.socialLinks && (
                  <div className="flex gap-4 mt-2">
                    {info.socialLinks.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="flex gap-2"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.icon === "SiSlack" && (
                            <SiSlack className="h-4 w-4" />
                          )}
                          {link.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
