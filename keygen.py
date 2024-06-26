import base64
import os

# Generate a 256-bit key (32 bytes)
key = os.urandom(32)

# Encode the key using base64
base64_key = base64.b64encode(key).decode('utf-8')
print(base64_key)
