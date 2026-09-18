import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <div
          className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-border
          bg-card
          px-4
          py-2
          "
        >
          <div className="h-2 w-2 rounded-full bg-zinc-500" />

          <span
            className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-muted-foreground
            "
          >
            Get In Touch
          </span>
        </div>

        <h2
          className="
          mt-6
          text-4xl
          font-black
          tracking-tight
          text-foreground
          sm:text-5xl
          lg:text-6xl
          "
        >
          Contact Chetan Chauhan
        </h2>

        <p
          className="
          mx-auto
          mt-5
          max-w-2xl
          text-muted-foreground
          "
        >
          Have a project in mind or looking for a frontend developer? Let&apos;s
          connect and build something amazing together.
        </p>
      </div>

      <div
        className="
        rounded-4xl
        border
        border-border
        bg-card
        p-8
        "
      >
        <h3 className="text-3xl font-black">Let&apos;s Work Together</h3>

        <p className="mt-4 max-w-3xl text-muted-foreground">
          I&apos;m available for freelance projects, frontend development,
          Next.js applications, UI/UX implementation and collaboration
          opportunities.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href="mailto:chauhanc1204@gmail.com"
            className="
            group
            rounded-3xl
            border
            border-border
            bg-background
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-foreground
            "
          >
            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-border
              bg-card
              "
            >
              <Mail size={22} />
            </div>

            <h4 className="mt-5 font-bold">Email</h4>

            <p className="mt-2 text-muted-foreground">chauhanc1204@gmail.com</p>
          </a>

          <a
            href="tel:+919913041204"
            className="
            group
            rounded-3xl
            border
            border-border
            bg-background
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-foreground
            "
          >
            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-border
              bg-card
              "
            >
              <Phone size={22} />
            </div>

            <h4 className="mt-5 font-bold">Phone</h4>

            <p className="mt-2 text-muted-foreground">+91 99130 41204</p>
          </a>

          <div
            className="
            rounded-3xl
            border
            border-border
            bg-background
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-foreground
            "
          >
            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-border
              bg-card
              "
            >
              <MapPin size={22} />
            </div>

            <h4 className="mt-5 font-bold">Location</h4>

            <p className="mt-2 text-muted-foreground">
              Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
