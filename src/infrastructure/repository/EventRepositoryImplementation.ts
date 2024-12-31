import ModelRepository from "../../domain/repository/ModelRepository";
import EventDTO from "../dto/EventDTO";
import Event from "../../domain/entities/Event";

export default class EventRepositoryImplementation implements ModelRepository {
    public findAll = async (): Promise<Array<EventDTO>> => {

        try {

            const data: Array<EventDTO> = await EventDTO.findAll();
            return data;

        } catch (e) {
            throw e
        }
    }
    public findById = async (id: string): Promise<EventDTO> => {
        throw new Error("Method not implemented.");
    };

    public save = async (event: Event): Promise<void> => {

        try {

            const eventDTO = new EventDTO(event.toDTO())
            await eventDTO.save();

        } catch (e) {
            throw e
        }

    };

    public delete = async (id: string): Promise<boolean> => {
        throw new Error("not suportesr");
    }

}
