import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class SteamProfileExample {

    private static final String API_KEY = "92A38910C5F7BC380DA2BD72DA244FB5";

    public static void main(String[] args) throws Exception {
        String vanity = "arasbuilds";

        String steamId = "76561198130791586";

        String url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/"
                + "?key=" + API_KEY
                + "&steamids=" + steamId;


        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response =
                client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}
