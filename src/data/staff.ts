import staffContent from '../content/staff.json'

type Instructor = {
  name: string
  title: string
  specialties: string[]
  photo?: string | null
  bio: string
}

const instructors: Instructor[] = staffContent.instructors as Instructor[]

export default instructors
