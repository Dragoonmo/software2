// Shift+Alt+F
// sahm + option + f
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {
  Container, Login, Register_owner,
  Register_veterinarian, Home_student, Type, Add_course, Animal_infoo, Profile,
  Common_users, Problem_id, Update_user,
  Animal_info_id, All_problem, Conversation, Verification,
  Your_ploblem, Update_problem, Page_chat, Profile_id, Search_user, Search_result,
  Type_search, Common_vete, Add_common, Request, Your_animall,
  Search_problem, Search_result2, All_followw, Home, All_teacher, Details_animal, Update_vet,
  Profile_vet_id, Add_advices, All_advices, FAQs, Profile_veterinarian,
  Animal_info_id_follow, All_problems_vet, Problem_id_vet, Your_problem_vet, Update_problem_vet,
  Animal_follow_id, Page_chat_vet, Conversation_vet, Profile_id_vett, Search_user_vet
  , Type_search_vet, Search_result_vet,
  Search_vet
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
            <Route path='/Register_owner' element={<Register_owner />} />
            <Route path='/Register_veterinarian' element={<Register_veterinarian />} />
            <Route path='/TypeRegister' element={<Type />} />
            <Route path='/Back' element={<Login />} />
            <Route path='/Back_to_type' element={<Type />} />
            <Route path='/Animal_infoo' element={<Animal_infoo />} />
            <Route path='/Add_course' element={<Add_course />} />
            {/* <Route path='/Add_animal' element={<Add_animal />} /> */}
            <Route path='/common_users' element={<Common_users />} />
            <Route path='Animal_info_id/:id' element={<Animal_info_id />} />
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
            <Route path='/Search_vet' element={<Search_vet />} />
            <Route path='/Search_user_vet' element={<Search_user_vet />} />
            <Route path='/search_result/:Type' element={<Search_result />} />
            <Route path='/search_result_vet/:Type' element={<Search_result_vet />} />
            <Route path='/Search_type' element={<Type_search />} />
            <Route path='/Search_type_vet' element={<Type_search_vet />} />
            <Route path='/common_vete' element={<Common_vete />} />
            <Route path='/Add_problem' element={<Add_common />} />
            <Route path='/Search_type_common' element={<Search_problem />} />
            <Route path='/search_result2/:Type' element={<Search_result2 />} />
            <Route path='Home_vet' element={<Home />} />
            <Route path='Home_vet/Problem_id/:id' element={<Problem_id_vet />} />
            <Route path='Home_vet/Animal_info_id_follow/:id' element={<Animal_follow_id />} />
            <Route path='all_follow' element={<All_followw />} />
            <Route path='requst' element={<Request />} />
            <Route path='animal_dtails/:id' element={<Details_animal />} />
            <Route path='all_teacher' element={<All_teacher />} />
            {/* سابقا هيك كان اسمها */}
            {/* <Route path='all_doc' element={<All_teacher />} /> */}
            <Route path='show_animal_requst/:id' element={<Your_animall />} />
            <Route path='profile_id_vet/:id' element={<Profile_vet_id />} />
            <Route path='all_advice' element={<All_advices />} />
            <Route path='add_advice' element={<Add_advices />} />
            <Route path='FAQs' element={<FAQs />} />
            <Route path='profile_vet' element={<Profile_veterinarian />} />
            <Route path='update_vet' element={<Update_vet />} />
            <Route path='Animal_info_id_follow' element={<Animal_info_id_follow />} />
            <Route path='Forum_vet' element={<All_problems_vet />} />
            <Route path='Forum_vet/Problem_id/:id' element={<Problem_id_vet />} />
            <Route path='my_problem_vet' element={<Your_problem_vet />} />
            <Route path='my_problem_vet/update_problem/:id' element={<Update_problem_vet />} />
            <Route path='chat_vet' element={<Page_chat_vet />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}
export default App