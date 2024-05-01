from typing import Any
from oxygenio import Oxygenio 

app = Oxygenio()

@app.on
def hello(data: dict[str, Any]):
    print(data, type(data))


if(__name__=='__main__'):
    app.run(host='localhost', port=15999, browser='edge')
