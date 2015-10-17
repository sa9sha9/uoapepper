<?xml version="1.0" encoding="UTF-8" ?>
<Package name="TeamGTP_3" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="." xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="ConfirmInput" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="LetsEat" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="LetsEat2" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="SpreadArms" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="aizu_dialect" src="aizu_dialect/aizu_dialect.dlg" />
        <Dialog name="ConfirmInput" src="ConfirmInput/ConfirmInput.dlg" />
        <Dialog name="aizu_to_mainstream" src="aizu_to_mainstream/aizu_to_mainstream.dlg" />
        <Dialog name="Conversation" src="Conversation/Conversation.dlg" />
    </Dialogs>
    <Resources>
        <File name="surprise3" src="behavior_1/surprise3.ogg" />
        <File name="choice_sentences_light" src="Aldebaran/choice_sentences_light.xml" />
    </Resources>
    <Topics>
        <Topic name="aizu_dialect_enu" src="aizu_dialect/aizu_dialect_enu.top" topicName="aizu_dialect" language="en_US" />
        <Topic name="aizu_dialect_jpj" src="aizu_dialect/aizu_dialect_jpj.top" topicName="aizu_dialect" language="ja_JP" />
        <Topic name="ConfirmInput_enu" src="ConfirmInput/ConfirmInput_enu.top" topicName="ConfirmInput" language="en_US" />
        <Topic name="ConfirmInput_jpj" src="ConfirmInput/ConfirmInput_jpj.top" topicName="" language="" />
        <Topic name="aizu_to_mainstream_enu" src="aizu_to_mainstream/aizu_to_mainstream_enu.top" topicName="aizu_to_mainstream" language="en_US" />
        <Topic name="aizu_to_mainstream_jpj" src="aizu_to_mainstream/aizu_to_mainstream_jpj.top" topicName="aizu_dialect" language="ja_JP" />
        <Topic name="Conversation_enu" src="Conversation/Conversation_enu.top" topicName="Conversation" language="en_US" />
        <Topic name="Conversation_jpj" src="Conversation/Conversation_jpj.top" topicName="Conversation" language="ja_JP" />
    </Topics>
    <IgnoredPaths>
        <Path src="aizu_dialect/aizu_dialect_enu.top" />
        <Path src="ConfirmInput/ConfirmInput_enu.top" />
        <Path src="manifest.xml" />
        <Path src=".metadata" />
        <Path src="ConfirmInput/ConfirmInput.dlg" />
        <Path src="" />
        <Path src="aizu_dialect/aizu_dialect.dlg" />
        <Path src="ConfirmInput/ConfirmInput_jpj.top" />
        <Path src="aizu_dialect" />
        <Path src="behavior_1/surprise3.ogg" />
        <Path src="TeamGTP_3.pml" />
        <Path src="ConfirmInput" />
        <Path src="behavior_1" />
        <Path src="ComeHere" />
    </IgnoredPaths>
</Package>
