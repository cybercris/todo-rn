import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";

interface FlatListHeaderComponentProps {
  isDarkEnabled: boolean;
}

function FlatListHeaderComponent({
  isDarkEnabled,
}: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text
        style={[
          styles.header,
          !isDarkEnabled ? { color: "#3D3D4D" } : { color: "#67E480" },
        ]}
      >
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  isDarkEnabled: boolean;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  isDarkEnabled,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[
              styles.taskButton,
              !isDarkEnabled
                ? !item.done
                  ? { backgroundColor: "#fff" }
                  : { backgroundColor: "rgba(25, 61, 223, 0.1)" }
                : !item.done
                ? { backgroundColor: "#191622" }
                : { backgroundColor: "#1D1B28" },
            ]}
          >
            <View
              testID={`marker-${index}`}
              style={[
                styles.taskMarker,
                !isDarkEnabled
                  ? !item.done
                    ? { borderColor: "#3D3D4D" }
                    : { backgroundColor: "#273FAD" }
                  : !item.done
                  ? { borderColor: "#67E480" }
                  : { backgroundColor: "#67E480" },
              ]}
            />
            <Text
              style={
                !isDarkEnabled
                  ? !item.done
                    ? { color: "#3D3D4D" }
                    : { color: "#A09CB1", textDecorationLine: "line-through" }
                  : !item.done
                    ? { color: "#67E480" }
                    : { color: "#A09CB1", textDecorationLine: "line-through" }
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={
        <FlatListHeaderComponent isDarkEnabled={isDarkEnabled} />
      }
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10,
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10,
  },
});
