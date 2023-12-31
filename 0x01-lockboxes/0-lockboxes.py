#!/usr/bin/python3
''' can unlock boxes '''


def canUnlockAll(boxes):
    ''' can unlock boxes '''
    visited = set()

    stack = [0]

    visited.add(0)

    while stack:
        current_box = stack.pop()
        for key in boxes[current_box]:
            if key not in visited and key < len(boxes):
                visited.add(key)
                stack.append(key)

    return len(visited) == len(boxes)
