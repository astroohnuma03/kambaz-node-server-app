import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findEnrollments();
    res.send(enrollments);
  });
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const newEnrollment = dao.enrollUserInCourse(userId, courseId);
    res.send(newEnrollment);
  })
  app.delete("/api/enrollments/:enrollmentId", (req, res) => {
    const { enrollmentId } = req.params;
    const status = dao.deleteEnrollment(enrollmentId);
    res.send(status);
  });
}