package abc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class test2 {
	static class palim{
		public int start;
		public int end;
		public palim(){
			start = 0;
			end = 0;
		}
	}
	
	static class ComparePalim implements Comparator<palim>{
		@Override
		public int compare(palim arg0, palim arg1) {
			if (arg0.start > arg1.start) {
				return 1;
			} else if (arg0.start < arg1.start) {
				return -1;
			}
			return 0;
		}		
		
	}
	
	static class CompareLength implements Comparator<palim> {

		@Override
		public int compare(palim arg0, palim arg1) {
			if ((arg0.end - arg0.start) > (arg1.end - arg1.start)) {
				return 1;
			} else if ((arg0.end - arg0.start) < (arg1.end - arg1.start)) {
				return -1;
			}
			return 0;
		}
		
	}
	
	static boolean isPalim(String s) {
		if (s == null || s.length() < 3) {
			return false;
		} else {
			int i = 0;
			int j = s.length() - 1;
			while (i < j) {
				if (s.charAt(i) != s.charAt(j)) {
					return false;
				}
				i++;
				j--;
			}
		}
		return true;
	} 
	
	static List<palim> getPalim(String s) {
		List<Integer> startList = new ArrayList<Integer>();
		List<palim> palimList = new ArrayList<palim>();
		for (int j = s.length(); j > 2; j--) {
        	int start = 0;
        	int end = s.length();
        	while (start + j <= s.length() && end - j >= 0) {
        		String s1 = s.substring(start, start + j);
        		String s2 = s.substring(end - j, end);
        		if (isPalim(s1) && !startList.contains(start)) {
        			palim p = new palim();
        			p.start = start;
        			p.end = start + j - 1;
        			palimList.add(p);
        			startList.add(start);
        		}
        		if (isPalim(s2) && !startList.contains(end - j)) {
        			palim p = new palim();
        			p.start = end - j;
        			p.end = end - 1;
        			palimList.add(p);
        			startList.add(end - j);
        		}
        		start ++;
        		end --;
        	}
        }
		return palimList;
	}
	
	static int[] shortestReach(int n, int[][] edges, int s) {
		// n : so node
		// edges : matrix node
		// s : starting point 
		int[] ret = new int[n - 1];
		List<Integer> temp = new ArrayList<>();
		int[] num = new int[n];
		Arrays.setAll(num, p -> temp.add(p + 1)? 0 : 1);
		List<Node> nodeList = new ArrayList<>();
		for (int i : temp) {
			nodeList.add(new Node(edges[i - 1][0], edges[i - 1][1], edges[i - 1][2]));
		}
		temp.remove(Integer.valueOf(s));
		
		return ret;
    }
	
	static class Node {
		List<Integer> edges;
		int range;
		public Node(int x, int y, int z) {
			this.edges = new ArrayList<>();
			this.edges.add(x);
			this.edges.add(y);
			this.range = z;
		}
		
		public boolean isContains(int x) {
			return this.edges.contains(x);
		}
		
		public int getRange() {
			return this.range;
		}
	}
	
	static class Road {
		List<List<Node>> roads;
		int range;
		
	}
	
	
	
	public static void main(String[] args) {
		List temp = new ArrayList<>();
		int[] num = new int[4];
		Arrays.setAll(num, p -> temp.add(p + 1)?0:1);
		System.out.println(temp);
//		String s = "kjlgjfmenkgllefleenmfiljjiffikeilkmgeneljhekllfhnlfimnmjljlhlljehmniejehfgknnihmhfenihnghgnjkhnfhifglhgenggknnmmjnnnfjmgehlkjkkemiekmlhgggingnjhfgkiejhhfkimenfjkhgfngkniigknlmnifnkiknnjmghmjfneemiikemllgemgmejfkgjinnlfkkjhekmejlleeliinmfeemigkfhlehglegjngelkeeeinhjgkkkllnmmkleekfkfemmeheklffhgimhfmhffnekgkfehkgelielljnkfijghmiimhjelmkgegjehfekfgkjlmekhkfkgfjjkekmjgikjhefgkjmkflhnfflfmjnjelngmgehhmhlgelkljfhhhjnheemfhekemhlkeejmhgljnimgjglfhkkgjkihiinfjmkngmijklhmejljgfglffnfjjjfmlnemhjjllneeihlijljnnlfmiilekeijginjjmjikfmnilmlhmnemijkfnfnjffekfmnnfggfffkfmfjljeknhjgnllhgneilfelekknfimnkhkhkigigjngffffkfeelmilkhjhfhjknfflgfjnkfkifjeifkgjnlgfefghgimfgjkhnnjfijkfgjmflnmihgkjlnljfjeigmjkemfhigekkkgliiemjjfgkhmjhjnniiglelkljmmihiinfkjjnnelfljlehnhehgfkhnmkelhlnjgiii";
//		System.out.println(s.length());
//		long start = System.currentTimeMillis();
//		List<palim> palims = getPalim(s);
//		long end = System.currentTimeMillis();
//		System.out.println(end - start);
//		LinkedList<Integer> a = new LinkedList<Integer>(); 
//		a.addFirst(1);
//		Collections.sort(palims, new ComparePalim());
//		String t = "";
//		int temp = 0;
//		for (palim p : palims) {
////			t += (p.start - temp ) + "-" ;
////			t += (p.end - p.start + 1) + "-";
////			temp = p.end;
//			t += (p.end - p.start + 1);
//		}
//		System.out.println(t);
//		int[][] a = { { 15, 137, 201, 29 }, { 62, 501, 196, 67 }, { 360, 1022, 321, 78 }, { 0, 66, 680, 95 }, { 0, 166, 680, 95 }, { 0, 266, 680, 95 }, { 0, 366, 680, 95 }, { 0, 466, 680, 95 }, { 4, 58, 312, 110 }, { 4, 170, 312, 110 }, { 4, 282, 312, 110 }, { 4, 394, 312, 110 }, { 4, 506, 312, 110 }, { 249, 477, 440, 78}, { 249, 477, 440, 78 } };
//		System.out.println(a.length);
//		String s = "1117,878,è¨ñÏê≠éü,è¨ñÏÉ}ÉEÇ≥Ç¬ÇÆ,è¨ñÏœ≥Ç≥Ç¬ÇÆ,Ç®ÇÃÇ‹Ç≥Ç¬ÇÆ,2,0,1117,4,3,2800,4900,3800,2900,5000,871,108,0,0,0,0,849,0,0,0,7,16,15,7,17,0,1000,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,4,1,4,4,1,4,4,4,4,4,4,0,0,1,MSG_CARD_CHARACTER_1117_LINES,MSG_CARD_CHARACTER_1117_HISTORY,MSG_CARD_CHARACTER_1117_SLOGAN,3297,0,0,1,1,1,0,1";
//		String[] temp = s.split(",");
//		System.out.println(temp.length);
		
//		for (int i = 0; i < 9; i++) {
//			System.out.println(horList.get(i));
//		}
//		System.out.println("check hor " + checkValid(verList));
		
//		Scanner sc = new Scanner(System.in);
//		String[] t = new String[20];
//		int c = 0;
//		while (true) {
//			String s = sc.nextLine();
//			System.out.println("sysout" + s);
//			if (s.equals("exit")) {
//				break;
//			}
//			String first = s.substring(7,8);
//			String second = s.substring(10,11);
//			String value = s.substring(15,16);
//			String temp = first + second + value;
//			t[c] = temp;
//			c++;
//		}
//		for (int i = 0; i < c; i++) {
//			System.out.println("horList.get(" + t[i].substring(0,1) + ").set(" + t[i].substring(1,2) + "," + t[i].substring(2,3) + ");");
//			System.out.println("verList.get(" + t[i].substring(0,1) + ").set("+ t[i].substring(1,2) + "," + t[i].substring(2,3) + ");");
//		}
	}
	
	static boolean checkValid(List<List<Integer>> list) {
		for (int j = 0; j < 9; j++) {
			List<Integer> templ = list.get(j);
			for (int i = 1; i < 10; i++  ) {
				if (Collections.frequency(templ, i) > 1) {
					System.out.println(j + "." + i + " " + Collections.frequency(templ, i));
					System.out.println(templ);
					return false;
				}
			}
		}
		return true;
	}
}
