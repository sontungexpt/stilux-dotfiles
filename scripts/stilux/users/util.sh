has_argument() {
	# check if passed more than 1 argument to the script
	local arg_check="$1"
	local args=("${@:1}")

	for arg in "${args[@]}"; do
		if [[ "$arg" == "$arg_check" ]]; then
			return 0
		fi
	done
	return 1
}

remove_arg() {
	local arg_check="$1"
	local args=("${@:1}")

	local new_args=()
	for arg in "${args[@]}"; do
		if [[ "$arg" != "$arg_check" ]]; then
			new_args+=("$arg")
		fi
	done

	echo "${new_args[@]}"
}

remove_arg_at_index() {
	local index="$1"
	local args=("${@:1}")

	unset "args[$index]"
	local length=${#args[@]}

	local i="$index"
	for ((i; i < length - 1; i++)); do
		args["$i"]="${args[$i + 1]}"
	done

	unset "args[$length - 1]"

	echo "${args[@]}"

}

find_index() {
	local arg_check="$1"
	local args=("${@:1}")

	for i in "${!args[@]}"; do
		if [ "${args[$i]}" == "$arg_check" ]; then
			echo "$i"
			return
		fi
	done
	echo -1
}

get_argument_value() {
	local arg="$1"
	local args=("${@:1}")

	for i in "${!args[@]}"; do
		if [ "${args[$i]}" == "$arg" ]; then
			local value="${args[$i + 1]}"

			if [ "$value" != "" ] && [[ "$value" != -* ]]; then
				echo "$value"
				return
			fi
		fi
	done
}
