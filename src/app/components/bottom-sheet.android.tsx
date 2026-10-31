import {
  Button,
  Column,
  Host,
  ModalBottomSheet,
  ModalBottomSheetRef,
} from "@expo/ui/jetpack-compose";
import { useRef, useState } from "react";
import { Text } from "react-native";

export default function BottomSheetAndroid() {
  const [isOpened, setIsOpened] = useState(false);
  const sheetRef = useRef<ModalBottomSheetRef>(null);

  const hideSheet = async () => {
    await sheetRef.current?.hide();
    setIsOpened(false);
  };

  return (
    <Host matchContents>
      <Column>
        <Button onClick={() => setIsOpened(true)}>
          <Text>Open Bottom Sheet</Text>
        </Button>
        {isOpened && (
          <ModalBottomSheet
            ref={sheetRef}
            onDismissRequest={() => setIsOpened(false)}
          >
            <Column>
              <Button onClick={hideSheet}>
                <Text>Close Bottom Sheet</Text>
              </Button>
            </Column>
          </ModalBottomSheet>
        )}
      </Column>
    </Host>
  );
}
