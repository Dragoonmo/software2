// Shift+Alt+F
// sahm + option + f
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {
  Container, Login, Register_student,Register_teacher, Home_student, Type, Add_course,
  Course_infoo, Profile,Common_users, Problem_id, Update_user,Course_info_id, All_problem,
  Conversation, Verification,Your_ploblem, Update_problem, Page_chat, Profile_id, Search_user,
  Search_result,Type_search, Common_vete, Add_common, Request, Your_Course,All_followw, Home,
  All_teacher, Details_Course, Update_vet,Add_advices, All_advices, FAQs,All_problems_vet,
  Problem_id_vet, Your_problem_vet, Update_problem_vet,Course_follow_id, Page_chat_vet,
  Conversation_vet, Profile_id_vett, Search_user_vet,Type_search_vet, Search_result_vet,
  Search_teacher,Search_vet_page,Add_course_teach
} from './Componets/index'

const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Routes>

            <Route path='/' element={<Home_student />} />

            {/* <Route path='/login' element={<General_user />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='Loginn' element={<Login />} />
            <Route path='/Registration' element={<Type />} />
            <Route path='/Register_student' element={<Register_student />} />
            <Route path='/Register_teacher' element={<Register_teacher />} />
            <Route path='/TypeRegister' element={<Type />} />
            <Route path='/Back' element={<Login />} />
            <Route path='/Back_to_type' element={<Type />} />
            <Route path='/Course_infoo' element={<Course_infoo />} />
            <Route path='/Add_course' element={<Add_course />} />
            {/* <Route path='/Add_animal' element={<Add_animal />} /> */}
            <Route path='/common_users' element={<Common_users />} />
            <Route path='Course_info_id/:id' element={<Course_info_id />} />
            <Route path='Problem_id/:id' element={<Problem_id />} />
            <Route path='/my_problem' element={<Your_ploblem />} />
            <Route path='my_problem/update_problem/:id' element={<Update_problem />} />
            <Route path='/All_problem' element={<All_problem />} />
            <Route path='/All_problem/Problem_id/:id' element={<Problem_id />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/update_user' element={<Verification />} />
            <Route path='/update_userr/:id' element={<Update_user />} />
            <Route path='/chat' element={<Page_chat />} />
            <Route path='/NewChat/:id' element={<Conversation />} />
            <Route path='/NewChat_vet/:id' element={<Conversation_vet />} />
            <Route path='/profile_id/:id' element={<Profile_id />} />
            <Route path='/profile_id_vettt/:id' element={<Profile_id_vett />} />
            <Route path='/Search_user' element={<Search_user />} />
            <Route path='/Search_teacher' element={<Search_teacher />} />
            <Route path='/Search_teacher_vet' element={<Search_vet_page />} />
            <Route path='/Search_user_vet' element={<Search_user_vet />} />
            <Route path='/search_result/:Name' element={<Search_result />} />
            <Route path='/search_result_vet/:Type' element={<Search_result_vet />} />
            <Route path='/Search_type' element={<Type_search />} />
            <Route path='/Search_type_vet' element={<Type_search_vet />} />
            <Route path='/common_vete' element={<Common_vete />} />
            <Route path='/Add_problem' element={<Add_common />} />
            <Route path='Home_vet' element={<Home />} />
            <Route path='Home_vet/Problem_id/:id' element={<Problem_id_vet />} />
            <Route path='Home_vet/Course_follow_id/:id' element={<Course_follow_id />} />
            <Route path='all_follow' element={<All_followw />} />
            <Route path='requst' element={<Request />} />
            <Route path='Course_dtails/:id' element={<Details_Course />} />
            <Route path='all_teacher' element={<All_teacher />} />
            {/* سابقا هيك كان اسمها */}
            {/* <Route path='all_doc' element={<All_teacher />} /> */}
            <Route path='show_course_requst/:id' element={<Your_Course />} />
            <Route path='all_advice' element={<All_advices />} />
            <Route path='add_advice' element={<Add_advices />} />
            <Route path='FAQs' element={<FAQs />} />
            <Route path='update_vet' element={<Update_vet />} />
            <Route path='Forum_vet' element={<All_problems_vet />} />
            <Route path='Forum_vet/Problem_id/:id' element={<Problem_id_vet />} />
            <Route path='my_problem_vet' element={<Your_problem_vet />} />
            <Route path='my_problem_vet/update_problem/:id' element={<Update_problem_vet />} />
            <Route path='chat_vet' element={<Page_chat_vet />} />
            <Route path='add_course_teach' element={<Add_course_teach />} />

            
          </Routes>
        </Container>
      </Router>
    </>
  )
}
export default App