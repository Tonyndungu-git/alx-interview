def rotate_2d_matrix(matrix):
    """" rotate a matrix"""
    if type(matrix) != list:
        return
    if len(matrix) <= 0:
        return
    if not all(map(lambda x: type(x) == list, matrix)):
        return
    rows = len(matrix)
    cols = len(matrix[0])
    if not all(map(lambda x: len(x) == cols, matrix)):
        return

    n = len(matrix)

    """Transpose the matrix"""
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    """Reverse each row"""
    for i in range(n):
        matrix[i] = matrix[i][::-1]
