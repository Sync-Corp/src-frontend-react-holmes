import PlanType from "./PlanType";
import User from "./User";

export default interface Plan {
    id: number,
    finalDate: Date,
    initialDate: Date,
    person: User,
    planType: PlanType
}

export interface PlanRequest {
    planType: PlanType
}