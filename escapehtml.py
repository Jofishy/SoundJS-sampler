import html
import sys

with open(sys.argv[1], 'r') as f:
    t = f.read()
    print(html.escape(t))