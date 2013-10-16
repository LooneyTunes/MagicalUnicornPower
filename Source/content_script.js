walk(document.body);

function walk(node) 
{
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  v = v.replace(/\b(Q|q)uantum (P|p)hysics/g, "Magical" + " Unicorn" + " Power");
  v = v.replace(/\b(Q|q)uantum (M|m)echanics/g, "Magical" + " Unicorn" + " Power");

  
	textNode.nodeValue = v;
}

