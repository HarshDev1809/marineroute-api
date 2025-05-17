import sys
import json
import searoute as sr

def main():
    input_str = sys.stdin.read()
    try:
        data = json.loads(input_str)

        originCoordinates = data['origin']
        destinationCoordinates = data['destination']

        route = sr.searoute(originCoordinates,destinationCoordinates)
        # Echo input back to Node
        print(json.dumps({
            "status": "success",
            "data": route
        }))
    except json.JSONDecodeError as e:
        print(json.dumps({
            "status": "error",
            "message": "Invalid JSON input",
            "details": str(e)
        }))

if __name__ == "__main__":
    main()
