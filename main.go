package main

import (
	"bytes"
	"fmt"
	"os/exec"
)

func main() {
	fmt.Println("Hello World")

	cmd := exec.Command("node", "--sd")
	stdout := bytes.NewBufferString("")
	cmd.Stdout = stdout
	if err := cmd.Run(); err != nil {
		fmt.Println("Error: ", err)
	}

	fmt.Println(stdout.String())
}
