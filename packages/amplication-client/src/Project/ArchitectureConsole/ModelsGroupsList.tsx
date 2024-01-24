import {
  Button,
  EnumButtonStyle,
  EnumTextStyle,
  Tooltip,
  Text,
} from "@amplication/ui/design-system";
import { Node, ResourceNode } from "./types";
import "./ModelsGroupList.scss";

const CLASS_NAME = "model-group-list";

type Props = {
  modelGroups: Node[];
  selectedNode: ResourceNode;
  readOnly: boolean;
  handleModelGroupFilterChanged: (event: any, modelGroup: Node) => void;
};

export default function ModelsGroupsList({
  modelGroups,
  selectedNode,
  readOnly,
  handleModelGroupFilterChanged,
}: Props) {
  return (
    <>
      <div className={CLASS_NAME}>
        <div className={`${CLASS_NAME}__filter`}>
          {selectedNode && (
            <>
              <div
                className={`${CLASS_NAME}__serviceBox`}
                style={{ borderColor: selectedNode.data.groupColor }}
              >
                <Button
                  key={selectedNode?.id}
                  icon="services"
                  iconSize="small"
                  buttonStyle={EnumButtonStyle.Text}
                ></Button>
              </div>
              <hr className={`${CLASS_NAME}__hr`} />
            </>
          )}
          <Text textStyle={EnumTextStyle.Tag}>{"Filter"}</Text>

          {modelGroups.map((model: ResourceNode) => (
            <div
              key={model.id}
              className={`${CLASS_NAME}__serviceBox`}
              style={{ borderColor: model.data.groupColor }}
            >
              <Tooltip
                className="amp-menu-item__tooltip"
                aria-label={model.data.payload.name}
                direction="nw"
                noDelay
              >
                <Button
                  key={model.id}
                  icon="services"
                  iconSize="small"
                  buttonStyle={EnumButtonStyle.Text}
                  onClick={(event) =>
                    handleModelGroupFilterChanged(event, model)
                  }
                ></Button>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
