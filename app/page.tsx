import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Suhaas Gambhir
      </h1>
      <p className="mb-4">
        {`I'm a software engineer with a passion for building efficient and scalable solutions.
        I enjoy working with modern technologies and frameworks to create impactful applications.
        My focus is on writing clean, maintainable code and continuously learning new technologies
        to solve complex problems.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
