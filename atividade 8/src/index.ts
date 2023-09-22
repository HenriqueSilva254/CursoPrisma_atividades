import prisma from "./database";

async () => {
  const students = prisma.student.groupBy({
    by: ["class"],
    _count: {id: true},
    orderBy: {_count: {id: "desc"}}
  })
  console.log(students);
}

async () => {
  const result = prisma.student.groupBy({
    by: ["class"],
    where: {
      jobId: null
    },
    orderBy: {_count: {id: "desc"}}
  })
  console.log(result);
}

// SELECT COUNT(*), s."class" FROM students s
// WHERE s."jobId" is null
// GROUP BY s."class"
// ORDER BY COUNT(*) desc