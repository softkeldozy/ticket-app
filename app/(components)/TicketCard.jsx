import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDIsplay from "./StatusDIsplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
      </div>
      <div className="ml-auto">
        <DeleteBlock />
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the description for the ticket attend t it{" "}
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">08/31/23 10:43pm</p>
          <ProgressBar />
        </div>
      </div>
      <div className="ml-auto flex items-end">
        <StatusDIsplay />
      </div>
    </div>
  );
};

export default TicketCard;
