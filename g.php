<script>
    document.getElementById("mdonate_number").oninput = function() {
        let current_val = this.value;
        let trees = Math.round(current_val / 5);
        let offset = trees / 5;
        offset = Math.round( offset * 10 ) / 10;
        document.getElementById("mdonate_tree").value = trees;
        document.getElementById("mdonate_offset").value = offset;
        checkStatus(current_val);
    }

    document.getElementById("mdonate_tree").oninput = function() {
        let trees = this.value;
        let current_value = parseInt(trees * 5);
        let offset = trees / 5;
        document.getElementById("mdonate_number").value = current_value;
        document.getElementById("mdonate_offset").value = offset;
        checkStatus(current_value);
    }
    document.getElementById("mdonate_offset").oninput = function() {
        let offset = this.value;
        let trees = Math.round(offset * 5);
        let current_value = Math.round(trees * 5);
        document.getElementById("mdonate_number").value = current_value;
        document.getElementById("mdonate_tree").value = trees;
        checkStatus(current_value);
    }
    function checkStatus(sum) {
        let id;
        if(sum <= 200) {
            id = "committed_members"
        } else if(sum <=1000) {
            id = "benefactors";
        } else {
            id = "supporters";
        }
        document.getElementById(id).checked = true;
    }
    if(document.getElementById("committed_members").checked == true) {
        let sum = document.getElementById("mdonate_number").value;
        checkStatus(sum);
    } else if(document.getElementById("benefactors").checked == true) {
        let sum = document.getElementById("mdonate_number").value;
        checkStatus(sum);
    } else if(document.getElementById("supporters").checked == true) {
        let sum = document.getElementById("mdonate_number").value;
        checkStatus(sum);
    }
    document.onload = function () {
        let sum = document.getElementById("mdonate_number").value;
        checkStatus(sum);
    }
    function validate(){
        let sum = document.getElementById("mdonate_number").value;

        return (sum >= 1) ? true : false;
    }
</script>
