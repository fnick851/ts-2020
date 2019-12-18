interface course {
  title: string
  content: string
}

function createObj(title: string, content: string) {
  let course: Partial<course> = {}
  course.title = title
  course.content = content

  return course
}
