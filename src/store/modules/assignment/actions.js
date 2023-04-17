const assignment = async ({commit}, payload) => {
    commit('assignment',payload);          
}
const assignmentList = async ({commit}, payload) => {
    commit('assignmentList',payload);  
        
}
export default {
    assignment,
    assignmentList   
};
