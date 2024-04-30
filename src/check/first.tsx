import React, { FC, useRef, useState, ChangeEvent, useEffect } from "react";
import {
    Button,
    Label,
    FormControl, TextInput, IDropdownItem,
    Heading,
    Text,
    Dropdown,
    Link
} from "@uitk/react";
import styled, { css } from "styled-components";
import TableComponent from "./TargetingComponent/TableComponent"; Report / ReportPanel";
import ReportPanel from " ../ import { FieldType } from "./FieldType";
import { ZoomOutMapIcon } from "@uitk/react-icons";
import "../TargetingPage/TargetingPage.css"
import "./TargetingComponent/TableComponent.css";
import TargetMockData from '../mockData/TargetMockData.json';
import DateRangePicker from "../../custom-component/DatePicker/DateRangePicker";
import { useselector) from "react-redux"; import { RootState } from "../../store";
interface Targeting {
    id: string, listid: string, filename: string, filesize: string, filetype: string, status: string, programtype: string,
    ofmember: string, accept: string, failed: string, procdatetime: string, tnumber: string
}
interface FilterValues {
    [key: string]: string;
}
const programTypeDropDown: IDropdownItem[] = [{ id: "1", label: "Asthama", value: "asthama" },
{ id: "2", label: "Diabetes", value: "diabetes" }, { id: "3", label: "NA", value: "na" },];
const fileTypeDropDown: IDropdownItem[] = [
    { id: "1", label: "Targeting", value: "targeting" }, { id: "2", label: "Demography", value: "demography" },
];
const statusDropDown: IDropdownItem[] = [
    {
        id: "1", label:
            "Executed", value: "executed"
    },
    { id: "2", label: { id: "3", label: "Pending Exec.", value: "pending" }, "Analysis Comp", value: "analysiscomp" },
    "Error", value: "error" },
{
    id: "4", label: { id: "5", label: "Upload Fail", value: "uploadfail" },
    const FilterPanel = styled.div`
    ${({ theme }) => css
    background - color: ${ theme.UitkTableColorBackgroundRest };
    padding: ${
        theme.UitkTableSpacingL);
        border - top: 4px solid ${ theme.UitkTableColorBorderHeadingRest };
    }
    const Fieldset = styled.fieldset`
    border: none;
    margin: 0;
    padding: 0;
    I
    export const TargetingPage: FC = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const targetingListdata: Targeting[] = useselector((state: RootState) => state.targeting.datasource);
    const targetingObject: any useselector((state: RootState) => state.targeting.data);
    const [data, setData] = usestate (targetingListdata as any);
    const [count, setCount]= useState('0' as any);
    const [fileTypeDD) = useState (fileTypeDropDown);
    const [programTypeDD] = useState (programTypeDropDown)
    const [statusDD] = useState (statusDropDown)
    const [populationItems, set PopulationItems) useState([]);
    const [statusItems, setStatusItems] = useState({});
    const [listIdItem, setListIdItem] = useState({});
    const [programItems, setProgramItems] = useState([]);
const [fileItem, setFileItem] = useState({});
const [value, setValue] = useState({
healthpalne: "",
dateText: "",
} as FilterValues);
const [showPanel, setShowPanel] = useState<boolean> (false);
const [isFullPanel, setFullPanel] = useState(false);
const [reportId, setReportId] = useState<string>('');
const [order, setorder] = useState<string>("ASC");
const [startDate, setStartDate] = useState<Date | null>(null);
const [endDate, setEndDate] = useState<Date | null>(null);
const [isValid, setIsValid] useState<boolean> (true);
const dateRangePickerRef = useRef<any>(null);
const onFilter () => {};
const reset = () => {
setValue({
healthpalne: "",
dateText:
});
set PopulationItems([]);
setStatusItems({});
setListIdItem({});
setProgramItems([]);
setFileItem({});
buttonRef.current.focus();
setStartDate (null);
setEndDate (null);
if (dateRangePickerRef.current) {
dateRangePickerRef.current,clearDates(); }
};
const handleStartDateChange = (date: Date | null) => { setStartDate (date);
};
setIsValid (!!date && ! !endDate && date <= endDate);
const handleEndDateChange (date: Date | null) => {
};
setEndDate (date);
setIsValid (!! startDate && !! date && startDate <= date);
const onclickReport = (id: string) => {
}
setReportId(id)
setShowPanel (!showPanel);
const sortingTable (col: keyof FieldType) => {
    if (order = "ASC") {
    const sorted = [...data].sort((a, b) => {
    if (col == "procdatetime") {
    const dateA = new Date (a [col as any]).getTime();
    const dateB = new Date (b[col as any]).getTime();
    return dateA > dateB? 1 -1;
    } else {
    return a [col as any).toLowerCase() > b [col as any].toLowerCase()?1: -1;
    });
    setData (sorted as any);
    setorder ("DSC");
    }
    if (order == "DSC") {
    const sorted [...data].sort((a, b) => {
    if (col "procdatetime") {
    const dateA new Date (a [col as any)).getTime(); const dateB new Date (b (col as any]).getTime();
    return dateA < dateB ? 1: -1;
    } else {
    return a [col as any].toLowerCase() < b[col as any).toLowerCase() ? 1 : -1; }
    });
    setData (sorted as any);
    setorder ("ASC");
    }
}

const closePanel = () => {
    const panelElement = document.querySelector(".panel") as HTMLElement | null; panelElement.style.width = null;
    setShowPanel (false);
    setFullPanel (false)
    };
    const expandFullPanel = () => {
    const panelElement = document.querySelector(".panel") as HTMLElement | null;
    panelElement.style.width = "100%";
    setFullPanel (true)
    };
    const expandDefaultPanel () => {
    const panelElement = document.querySelector(".panel") as HTMLElement | null;
    panelElement.style.width = null;
    setFullPanel (false)
    };

    const rightPanel (id: string) => {
        return (
        <div className={`panel ${ showPanel?"active": ""}
}>
    {/* Cancel icon to close panel */ }
    < div >
    <Report Panel
        onPressClose={closePanel}
        id={id}
        expandFull Panel={expandFullPanel}
        expandDefaultPanel={expandDefaultPanel}
        isFullPanel={isFullPanel}>
    </ReportPanel>
        </div >
        </div >
        )
        }
const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevValue) => {
        ...prevValue,
        [name]: value
        }))
        };


const handle FullScreen = () => {
    const element = document.getElementById("targeting-div") as HTMLElement | null;
    if (!element) {
        return;
    }
    const isNotFullscreen = document.fullscreenElement;
    if (isNotFullScreen) {
        document.exitFullscreen();
    } else {
        element.requestFullscreen().then(() => {
            if (element.style) {
                element.style.backgroundColor = "#ffffff";
            }
        });
    }
};
I
useEffect(() => {
    setData(targetingListdata)
    setCount(targetingObject?.count)
}, [targetingListdata]);


return (
    <>
    (data ?
    <div className="mainDiv" id="targeting-div">
    <FilterPanel className={"mb-m"} style={{ border: "none" }}>
    <Fieldset>
    <div className="targetingHeader">
    <div className="count LeftDiv">
    <Heading level="h3">Targeting</Heading>
    <div className="countDiv">
    <Text className="countText" weight="bold" >{count}</Text>
    </div>
    </div>
    <ZoomOutMapIcon size="36" onClick={handleFullScreen) />
    </div>
    <div className="row">
    <div className="col-s-3 col-m-3 col-1-3">
    <FormControl id={"text-input"}>
    <Label>Health Plan</Label>
    <TextInput name={'healthpalne'} value={value.healthpalne) onChange={onChange) />
    </FormControl>
    </div>
    div className="col-s-3 col-m-3 col-1-3"> <
    <FormControl id="dropdown-multi-population">
    <Label >{'Population')</Label>
    <Dropdown
    type="multi"
    items={fileTypeDD}
    fieldset Label="FileType"
    onChange={setPopulationItems}
    value={populationItems}
    />
    </FormControl>
    </div>

    <div className="col-s-3 col-m-3 col-1-3">
<FormControl id="dropdown-multi">
<Label >{'Program Type')</Label>
<Dropdown
type="multi"
items={programTypeDD}
fieldset Label="FileType"
onChange={setProgramItems}
value={programItems}
/>
</FormControl>
</div>
<div className="col-s-3 col-m-3 col-1-3">
<FormControl id="dropdown-single-status">
<Label >{'Status'}</Label>
<Dropdown
type="single"
items={statusDD)
fieldset Label="FileType"
onChange={setStatusItems)
value={statusItems}
/>
</FormControl>
</div>
<div className="col-s-3 col-m-3 col-1-3">
<FormControl id="dropdown-single-listid">
<Label >{'List ID'}</Label>
<Dropdown
type="single"
items={statusDD}
fieldset Label="FileType"
onChange={setListIdItem}
value={listIdItem}
/>
</FormControl>
</div>

<div className="col-s-3 col-m-3 col-1-3">
<FormControl id="dropdown-single-filetype">
<Label >{'File Type'}</Label>
<Dropdown
type="single"
items={fileTypeDD)
fieldset Label="FileType"
onChange={setFileItem}
value={fileItem}
/>
</FormControl>
</div>
<div className="col-s-3 col-m-3 col-1-3">
<Label>Process Date</Label>
<DateRangePicker
onStartDateChange={handleStartDateChange)
onEndDateChange=(handleEndDateChange)
ref={dateRangePickerRef)
/>
</div>
<div className="col-s-3 col-m-3 col-1-3">
<Button
className={"mr-m mt-base"}
onPress={onFilter)
buttonRef={buttonRef}
Filters
</Button>
<Button
variant="tertiary"
className={"mr-m mt-base"}
onPress={reset)
buttonRef={buttonRef}
Clear
</Button>
</div>
</div>
</Fieldset>
</FilterPanel>
<TableComponent data=(data) onPressReport={onClickReport}
onSortData={sortingTable} order={order}
totalItemsCount=(data.length} pageSize={5} />
{rightPanel (reportId)}
</div>
:<><p>Data is loading</p></>}
</>
);
};