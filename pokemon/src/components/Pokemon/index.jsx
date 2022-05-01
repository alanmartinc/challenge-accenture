import { Fragment } from 'react';
import SearchBox from '../SearchBox';
import Pagination from '../Pagination';
import './index.css';

export default function Pokemon() {
	return (
		<Fragment>
			<SearchBox />
			<div className='pokedex-container'>Pokemon</div>
			<Pagination />

			<div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div>10</div>
				<div>11</div>
				<div>12</div>
				<div>13</div>
				<div>14</div>
				<div>15</div>
				<div>16</div>
				<div>17</div>
				<div>18</div>
				<div>19</div>
				<div>20</div>
			</div>
		</Fragment>
	);
}