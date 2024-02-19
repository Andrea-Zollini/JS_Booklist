<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' integrity='sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==' crossorigin='anonymous' />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.css' integrity='sha512-tx5+1LWHez1QiaXlAyDwzdBTfDjX07GMapQoFTS74wkcPMsI3So0KYmFe6EHZjI8+eSG0ljBlAQc3PQ5BTaZtQ==' crossorigin='anonymous' />
    <title>JS Booklist</title>
</head>

<body class="bg-dark text-white">
    <div class="container text-center mt-5">
        <div class="row">
            <h1><i class="fa-solid fa-book me-3 text-primary"></i>JS Booklist</h1>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-md-8">
                <form class="mt-5" id="book_form">
                    <div class="form-group">
                        <label for="title" class="mb-2">Title</label>
                        <input type="text" id="title" class="form-control">
                    </div>
                    <div class="form-group mt-3">
                        <label for="author" class="mb-2">Author</label>
                        <input type="text" id="author" class="form-control">
                    </div>
                    <div class="form-group mt-3">
                        <label for="isbn" class="mb-2">ISBN</label>
                        <input type="text" id="isbn" class="form-control">
                    </div>

                    <input type="submit" value="Add Book" class="btn btn-primary mt-3">
                </form>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-8">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="book_list"></tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="index.js"></script>
</body>

</html>