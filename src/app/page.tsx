import HomeAssistantService from "@/src/app/service/home-assistant.service";

const homeAssistantService = new HomeAssistantService(process.env.HOME_ASSISTANT_TOKEN, process.env.HOME_ASSISTANT_URL);

export default function Home() {
  const apiResp = homeAssistantService.api();

  return (
    <div>
      <p>Home Assistant: {apiResp}</p>
    </div>
  );
}
