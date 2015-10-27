<?xml version="1.0" encoding="UTF-8" ?>
<Package name="aizuben" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="." xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="conversation" src="conversation/conversation.dlg" />
    </Dialogs>
    <Resources>
        <File name="index" src="html/index.html" />
        <File name="bootstrap.min" src="html/css/bootstrap.min.css" />
        <File name="bootstrap.min" src="html/js/bootstrap.min.js" />
        <File name="style" src="html/css/style.css" />
    </Resources>
    <Topics>
        <Topic name="conversation_enu" src="conversation/conversation_enu.top" topicName="conversation" language="en_US" />
        <Topic name="conversation_jpj" src="conversation/conversation_jpj.top" topicName="conversation" language="ja_JP" />
    </Topics>
    <IgnoredPaths>
        <Path src=".DS_Store" />
        <Path src="behavior_1" />
    </IgnoredPaths>
</Package>
