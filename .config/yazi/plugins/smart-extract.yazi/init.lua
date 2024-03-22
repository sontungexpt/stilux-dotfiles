-- Define function to extract rar files
-- local is_package_exists = function(name)
-- 	local handle = io.popen("which " .. name)
-- 	if handle then
-- 		local result = handle:read("*a")
-- 		handle:close()
-- 		return result ~= ""
-- 	end
-- 	return false
-- end

-- local function un_rar(file)
-- 	if not is_package_exists("unrar") then
-- 		ya.notify({
-- 			title = "Extracting RAR files",
-- 			content = "unrar is not installed",
-- 			timeout = 3,
-- 			level = "error",
-- 		})
-- 		return
-- 	end

-- 	local destination = string.gsub(file, "%.rar$", "")

-- 	local cmd = string.format("unrar e '%s' '%s'", file, destination)
-- 	os.execute(cmd)
-- end

-- -- Define function to extract zip files
-- local function un_zip(file)
-- 	local destination = string.gsub(file, "%.zip$", "")
-- 	if not os.rename(file, destination) then
-- 		print("ERROR: Failed to rename file")
-- 		os.exit(1)
-- 	end
-- 	local cmd = string.format("unzip '%s' -d '%s'", file, destination)
-- 	os.execute(cmd)
-- end

-- -- Define function to extract 7z files
-- local function un_7z(file)
-- 	local destination = string.gsub(file, "%.7z$", "")
-- 	if not os.rename(file, destination) then
-- 		print("ERROR: Failed to rename file")
-- 		os.exit(1)
-- 	end
-- 	local cmd = string.format("7z x '%s' -o'%s'", file, destination)
-- 	os.execute(cmd)
-- end

return {
	entry = function(self, args) end,
}
