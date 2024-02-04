export class Alerts {
        idAlert: number;
        creatorId: number;
        type: string;
        location: string;
        details: string;
        status: string;
        interventionInProgress: number[];
      
        constructor(
          idAlert: number,
          creatorId: number,
          type: string,
          location: string,
          details: string,
          status: string,
          interventionInProgress: number[]
        ) {
          this.idAlert = idAlert;
          this.creatorId = creatorId;
          this.type = type;
          this.location = location;
          this.details = details;
          this.status = status;
          this.interventionInProgress = interventionInProgress;
        }
      }
