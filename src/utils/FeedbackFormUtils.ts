import type {Ref} from 'vue';

export function checkIfFormIsValid(name: Ref<string>, email: Ref<string>, message: Ref<string>) {
    if (name.value.trim() == "" || email.value.trim() == "" || message.value.trim() == "") {
        return false;
    }
    return true;
}

export function isApiResponseSuccessful(response:any) {
    if (response == undefined || response == null || response.data == undefined || response.data == null) return false;
    return response.data.status == "true";
}
