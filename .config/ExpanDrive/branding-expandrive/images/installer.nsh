!macro customInit
ExecWait '"$INSTDIR\SharedSupport\exfs.exe" exfs=true exupgrade=true'
!macroend

!macro customInstall
DetailPrint "Installing EXFS"

ExecWait '"$INSTDIR\SharedSupport\exfs.exe" exfs=true exinstall=true'

DetailPrint "Finished Installing EXFS"
!macroend