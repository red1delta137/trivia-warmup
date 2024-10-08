import { Question } from "@/components/text/Question/Question";
import {MultipleChoiceQuestion} from "@/components/text/Question/MultipleChoiceQuestion";
import {TrueFalseQuestion} from "@/components/text/Question/TrueFalseQuestion";


export function QuestionPage() {

    let inverseToggle = true;
    return (
        <>
            <Question/>
            {inverseToggle ? (<TrueFalseQuestion/>) : (<MultipleChoiceQuestion/>)}
        </>
    );
}