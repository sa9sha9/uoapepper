<?xml version="1.0" encoding="UTF-8" ?>
<Package name="aizuben" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="." xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="conversation" src="conversation/conversation.dlg" />
        <Dialog name="continue" src="continue/continue.dlg" />
    </Dialogs>
    <Resources>
        <File name="bootstrap.min" src="html/css/bootstrap.min.css" />
        <File name="bootstrap.min" src="html/js/bootstrap.min.js" />
        <File name="style" src="html/css/style.css" />
        <File name="index" src="html/index.html" />
    </Resources>
    <Topics>
        <Topic name="conversation_enu" src="conversation/conversation_enu.top" topicName="conversation" language="en_US" />
        <Topic name="conversation_jpj" src="conversation/conversation_jpj.top" topicName="conversation" language="ja_JP" />
        <Topic name="continue_enu" src="continue/continue_enu.top" topicName="continue" language="en_US" />
        <Topic name="continue_jpj" src="continue/continue_jpj.top" topicName="continue" language="ja_JP" />
    </Topics>
    <IgnoredPaths>
        <Path src=".DS_Store" />
        <Path src="html/html_itou/src" />
        <Path src="html/html_itou/gulpfile.js" />
        <Path src="html/html_itou" />
        <Path src="html/html_itou/src/js" />
        <Path src="html/html_itou/index.html" />
        <Path src="html/html_itou/components.js" />
        <Path src="html/html_itou/src/css/style.css" />
        <Path src="html/.DS_Store" />
        <Path src="html/html_itou/src/js/components.js" />
        <Path src="html/html_itou/package.json" />
        <Path src="html/html_itou/src/css" />
        <Path src="html/html_itou/style.css" />
    </IgnoredPaths>
</Package>
