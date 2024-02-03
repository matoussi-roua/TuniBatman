export class TrainingSession {
        id: number;
        title: string;
        description: string;
        type: string;
        creatorId: number;
        subscribers: number[];
        video: string;
      
        constructor(
          id: number,
          title: string,
          description: string,
          type: string,
          creatorId: number,
          subscribers: number[],
          video: string
        ) {
          this.id = id;
          this.title = title;
          this.description = description;
          this.type = type;
          this.creatorId = creatorId;
          this.subscribers = subscribers;
          this.video = video;
        }
      }
