import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { TabList, TabPanels, Tabs, Tab, TabPanel, List,  ListItem, ListIcon} from "@chakra-ui/react";

export default function Profile() {
  return (
  <Tabs mt="40px" p="20px" colorScheme="black" variant='endclosed'>
<TabList>
<Tab _selected={{color: 'white', bg:'purple.700'}} >Account Info</Tab>
<Tab _selected={{color: 'white', bg:'purple.700'}}>Task History </Tab>
</TabList>

<TabPanels>
<TabPanel>
<List spacing={4}>
  <ListItem>
    <ListIcon as={EmailIcon}>
Email: a_putra.16411059@student.ubl.ac.id
    </ListIcon>
  </ListItem>
  <ListItem>
  <ListIcon as={ChatIcon}>
Silahkan hubungi jika penting
  </ListIcon>
  </ListItem>
  <ListItem>
    <ListIcon as={StarIcon}>
berikan bintang
    </ListIcon>
  </ListItem>

</List>
</TabPanel>
<TabPanel>
<List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={WarningIcon} color='red.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>
</TabPanel>
</TabPanels>
  </Tabs>
  )
}
