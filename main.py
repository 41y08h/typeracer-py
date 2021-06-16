import keyboard
import time
from tkinter import Tk


hotkey = "ctrl + enter"
delay = 0.0003


if(__name__ == "__main__"):
    while True:
        if keyboard.is_pressed(hotkey):
            keyboard.write(Tk().clipboard_get(), delay=delay)
            time.sleep(0.05)
        time.sleep(0.01)
